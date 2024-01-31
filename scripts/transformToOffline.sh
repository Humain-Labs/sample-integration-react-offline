set -e

# specify your tag here.
# to make a new release, change version in package.json and create a new github release with a tag like "v3.9.1"
tag_name="components-react-v3.9.0" 


repo_dir="$(pwd)" # run this via package.json, so you are in the right dir.
echo "current dir: $repo_dir"

dss_repo_path="$repo_dir/repositories/porsche-design-system"

function delete_clone_repo {
    echo "remove old clone and clone tag $tag_name."
    # rm -rf "$dss_repo_path"
    git clone --depth 1 --branch $tag_name git@github.com:porsche-design-system/porsche-design-system.git $dss_repo_path
}
function install_deps {
    cd $dss_repo_path
    echo "Installing dependencies"
    yarn set version 1.22.19 # use an old yarn version for this
    # yarn install failed for me, still worked, so I replaced "&&" with "||"
    yarn install || yarn build:core-dependencies && yarn build:components-prod && yarn build:components-js-prod && yarn build:components-react
    cd $repo_dir
}
function delete_copy_cdn_files {
    dss_subdir="/public/porsche-design-system"
    echo "delete $repo_dir$dss_subdir"
    rm -rf "$repo_dir$dss_subdir" 
    echo "copy '/packages/assets/cdn/' to '$dss_subdir'"
    cp -r "$dss_repo_path/packages/assets/cdn/." "$repo_dir$dss_subdir"
}
function delte_copy_dss_packages {
    cd $repo_dir
    echo "deleting ./components-*"
    rm -r components-* || true
    echo "copy ./node_modules/@porsche-design-system/ to ."
    cp -r "./node_modules/@porsche-design-system/" .
}

function tranform_cdn_and_packages {
    node ./scripts/transformPorscheDesignSystem.js
}

delete_clone_repo # required to build the cdn files
install_deps
delete_copy_cdn_files
delte_copy_dss_packages
tranform_cdn_and_packages

set -e

# specify your tag here.
# to make a new release, change version in package.json and create a new github release with a tag like "v3.9.1"
tag_name="components-react-v3.9.0" 


repo_dir="$(pwd)" # run this via package.json, so you are in the right dir.
echo "current dir: $repo_dir"

dss_path="$repo_dir/repositories/porsche-design-system"

function delete_clone_repo {
    echo "remove old clone and clone tag $tag_name."
    # rm -rf "$dss_path"
    git clone --depth 1 --branch $tag_name git@github.com:porsche-design-system/porsche-design-system.git $dss_path
}
function install_deps {
    cd $dss_path
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
    cp -r "$dss_path/packages/assets/cdn/." "$repo_dir$dss_subdir"
}
function delete_transform_copy_node_modules {
    # @todo we could do this in a different order....
    echo "delete node_modules/@porsche-design-system/"
    rm -r "node_modules/@porsche-design-system"
    yarn install --check-files
    node ./scripts/transformPorscheDesignSystem.js
    #rm -r "components*"
    cp -r "./node_modules/@porsche-design-system/" .
}

delete_clone_repo
install_deps
delete_copy_cdn_files
delete_transform_copy_node_modules

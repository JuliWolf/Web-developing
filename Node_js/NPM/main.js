// Install packages.json from current directory
// npm install

//Install specific package
// npm install <package-name>


// Flags
//install and addss the entry to the package.json file dependencies
// --save

//install and adds the entry to the package.json file devDependencies
// --save-dev


//Update
// npm update

//Update specific package
// npm update <package-name>


//Running Tasks
// npm run <task-name>
// {
//     "scripts": {
//         "watch": "webpack --watch --progress --colors --config webpack.conf.js",
//         "dev": "webpack --progress --colors --config webpack.conf.js",
//         "prod": "NODE_ENV=production webpack -p --config webpack.conf.js",
//     },
// }

// npm run watch
// npm run dev
// npm run prod


/*WHERE NPM INSTALL PACKAGES*/
//locally
// npm install <package-name>

//globally
// npm install -g <package-name>

//Command to know version and path
// nvm

//To get only top=level packages (basic)
// npm list --depth=0

//To see latest available version
// npm view [package-name] versionb

//Install exact version
// npm install <package>@<varsion>

//Discover new releases of the packages
// npm outdated

//Update all major version of all packages
// npm install -g npm-check-updates
// ncu -u
// npm update

/*Uninstall package*/
// npm uninstall <package-name>

//uninstall and remove from package.json
// npm uninstall -S <package-name>
//remove from devDependencies
// npm uninstall -D <package-name>
//Uninstall globally
// npm uninstall -g <package-name>



/*Package json Versions*/
// ~ : if you write ~0.13.0 , you want to only update patch releases: 0.13.1 is ok, but 0.14.0 is not.
// ^ : if you write ^0.13.0 , you want to update patch and minor releases: 0.13.1 , 0.14.0 and so on.
// * : if you write * , that means you accept all updates, including major version upgrades.
// > : you accept any version higher than the one you specify
// >= : you accept any version equal to or higher than the one you specify
// <= : you accept any version equal or lower to the one you specify
// < : you accept any version lower to the one you specify
// = : you accept that exact version
// - : you accept a range of versions. Example: 2.1.0 - 2.6.2
// || : you combine sets. Example: < 2.1 || > 2.6

// no symbol: you accept only that specific version you specify
// latest : you want to use the latest version available


/*Package-lock.json*/
// The goal of the file is to keep track of the exact version of every package that is installed so
// that a product is 100% reproducible in the same way even if packages are updated by their
// maintainers.


/*Semantic versioning rules*/

// 3 digits: x.y.z
//     - the first digit is the major version
//     - the second digit is the minor version
//     - the third digit is the patch version

// RUles for new releases
//     - you up the major version when you make incompatible API changes
//     - you up the minor version when you add functionality in a backward-compatible manner
//     - you up the patch version when you make backward-compatible bug fixes
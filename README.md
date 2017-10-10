##### App utilising Neon-based Rust libary to interface with SAFE network

At the time of this commit, this application very simply uses maidsafe/system_uri to register app with system and provides a button to generate and receive an auth URI from a mock routing SAFE Browser authenticator.

See safe_app_neon libarary on which this app depends: https://github.com/hunterlester/safe_app_neon

##### Goals:
- Discuss with MaidSafe devs the issues of using FFI layer
- Explore feasibility of using [Neon](https://www.neon-bindings.com/)
- Determine and discuss costs and problems of using Neon

##### Setup:
- `npm install`
- `npm run package`
- Be sure you are running mock routing SAFE browser build
- Run executable in `neon-app-example*` folder that will be output

See me for details if you run into issues during compilation, especially on Windows

##### Next steps
- Allow customisation of requested containers and respective permissions (currently hard coded);
- I'll continue to work on this library in my free time to further implement further safe_client_libs functions
- Run clippy on safe_app_neon library to improve code 
- Implement useful tests in safe_app_neon library

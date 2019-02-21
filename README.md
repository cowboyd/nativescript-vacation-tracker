# nativescript-vacation-tracker

## Setup
- [Quick setup for NativeScript CLI](https://docs.nativescript.org/angular/start/quick-setup#quick-setup)
- To run/build app locally, not just on device, [Full setup for NativeScript CLI](https://docs.nativescript.org/angular/start/quick-setup#full-setup)
- Install [external dependencies of XCUITest driver for iOS](https://github.com/NativeScript/nativescript-dev-appium#setup):
```
brew install carthage
brew install libimobiledevice --HEAD
brew install ideviceinstaller
brew install ios-webkit-debug-proxy
```



## Running tests for iOS
- `tns build ios`
- `find platforms -name *.app | xargs yarn e2e --runType sim.iPhone7 --appPath`

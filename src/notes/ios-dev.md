---
title: iOS Dev
date: '2019-11-26'
categories:
- Mobile Dev
---

## Simulator

### ios-sim & ios-deploy

- Install `ios-sim`: `npm install -g ios-sim`
- Install `ios-deploy`: `npm install -g ios-deploy`
- List devices: `ios-sim showdevicetypes`
- Launch app on specific device: `ios-sim launch --devicetypeid DEVICE_TYPE_ID ~/Desktop/AppName.app`
- Launch app on iPhone X: `ios-sim launch --devicetypeid iPhone-X ~/Desktop/AppName.app`

- https://github.com/phonegap/ios-sim

### xcrun simctl

- List available commands: `xcrun simctl`
- List devices: `xcrun simctl list`
- Install app on specific device: `xcrun simctl install DEVICE_UID ~/Desktop/AppName.app`
- Install app on specific device (Example): `xcrun simctl install 1A258AC5-E93B-4D7F-8788-A6E8A49025DD ~/Desktop/AppName.app`
- Install app on currently booted simulator: `xcrun simctl install booted ~/Desktop/AppName.app`

- http://www.anexinet.com/blog/install-app-ios-simulator/
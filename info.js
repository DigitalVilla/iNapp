////iOS - add alias to .bash_profiles
alias ios='open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app'

///Android
//List all available emulators
  ~/Library/Android/sdk/tools/emulator -list-avds
//Then run one emulator in the list
  ~/Library/Android/sdk/tools/emulator -avd Nexus_5X_API_27

# Alias Definitions
alias mphp="/Applications/MAMP/bin/php/php7.1.26/bin/php"
# Android SDK
export ANDROID_SDK=/Users/villa/Library/Android/sdk
# Android platform tools
export PATH=/Users/villa/Library/Android/sdk/platform-tools:$PATH

# iOS simulator
alias ios="open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app"
# Android sim list
alias sdkls="~/Library/Android/sdk/tools/emulator -list-avds"
# Android simulator
alias sdk="~/Library/Android/sdk/tools/emulator -avd "
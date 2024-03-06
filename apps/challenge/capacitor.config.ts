import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'challenge',
  webDir: '../dist/challenge',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;

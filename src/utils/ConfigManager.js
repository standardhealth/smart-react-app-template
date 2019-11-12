export class ConfigManager {
  constructor(config = {}) {
    this.config = global.CONFIG ? { ...global.CONFIG , ...config } : { ...config };
  }

  get(name, defaultValue) {
    const parts = name.split('.');
    let context = this.config;
    let value = null;
    for (const i in parts) {
      const part = parts[i];
      value = context[part];
      context = value;
    }
    return value || defaultValue;
  }

  add(conf) {
    if (conf) {
      this.config = {
        ...this.config,
        ...conf
      };
    }
  }
}

const config = new ConfigManager();
export default config;
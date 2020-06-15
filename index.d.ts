import { PluginFunction } from 'vue';

export interface RunOptions {
  clearConsole: boolean;
  element: Document | HTMLElement;
}

export interface AxeConfig {
  /**
   * mixed(optional) Used to set the branding of the helpUrls
   */
  branding?: {
    /**
     * string(optional) sets the brand string - default "axe"
     */
    brand?: string;
    /**
     * string(optional) sets the application string - default "axeAPI"
     */
    application?: string;
  };
  /**
   * Used to set the output format that the axe.run function will pass to the callback function
   */
  reporter?: string;
  /**
   * Used to add checks to the list of checks used by rules, or to override the properties of existing checks
   */
  checks?: any;
  /**
   * Used to add rules to the existing set of rules, or to override the properties of existing rules
   */
  rules?: any;
  /**
   * A locale object to apply (at runtime) to all rules and checks, in the same shape as /locales/*.json.
   */
  locale?: any;
  /**
   * Set the compatible version of a custom rule with the current axe version. Compatible versions are all patch and minor updates that are the same as, or newer than those of the `axeVersion` property
   */
  axeVersion?: string;
}

export interface AxeRunOptions {
  /**
   * Limit which rules are executed, based on names or tags
   */
  runOnly?: any;
  /**
   * Allow customizing a rule's properties (including { enable: false })
   */
  rules?: any;
  /**
   * Which reporter to use
   */
  reporter?: string;
  /**
   * Limit which result types are processed and aggregated
   */
  resultTypes?: any;
  /**
   * Return xpath selectors for elements
   */
  xpath?: boolean;
  /**
   * Use absolute paths when creating element selectors
   */
  absolutePaths?: boolean;
  /**
   * Tell axe to run inside iframes
   */
  iframes?: boolean;
  /**
   * Return element references in addition to the target
   */
  elementRef?: boolean;
  /**
   * Scrolls elements back to before axe started
   */
  restoreScroll?: boolean;
  /**
   * How long (in milliseconds) axe waits for a response from embedded frames before timing out
   */
  frameWaitTime?: number;
  /**
   * Any additional assets (eg: cssom) to preload before running rules
   */
  preload?: boolean;
  /**
   * Log rule performance metrics to the console
   */
  performanceTimer?: boolean;
}

export interface VueAxeStyle {
  head?: string;
  boldCourier?: string;
  moderate?: string;
  critical?: string;
  serious?: string;
  minor?: string;
  title?: string;
  url?: string;
}

export interface VueAxeOptions {
  /**
   * Disables automatic verification. Only checks with $axe.run
   */
  auto?: boolean;
  /**
   * Clears the console each time vue-axe runs
   */
  clearConsoleOnUpdate?: boolean;
  /**
   * Provide your Axe-core configuration
   */
  config?: AxeConfig;
  /**
   * Provide your Axe-core runtime options
   */
  runOptions?: AxeRunOptions;
  /**
   * Used to delay the first check. - `Millisecond`
   */
  delay?: number;
  /**
   * 
   */
  style?: VueAxeStyle;
  /**
   * Register Axe plugins
   */
  plugins?: any[];
  /** 
   * Handle the results. (This may be needed for automated tests)
   */
  customResultHandler?: (error: any, results: any);
}

export interface VueAxe {
  run({ clearConsole, element }: RunOptions): void;
  plugins: Record<string, any>;
}

declare module 'vue/types/vue' {
  interface Vue {
    $axe: VueAxe;
  }
}

declare class VueAxePlugin {
  static install: PluginFunction<VueAxeOptions>;
}

export default VueAxePlugin;

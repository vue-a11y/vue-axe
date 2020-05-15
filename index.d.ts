import { PluginFunction } from 'vue';

interface RunOptions {
    clearConsole: boolean;
    element: Document | HTMLElement;
}

export interface VueAxe
{
    run({ clearConsole, element }: RunOptions): void;

    plugins: Record<string, any>;

    clearConsole(forceClear: boolean): void;
    
    debounce(): void;
}

declare module 'vue/types/vue'
{
    interface Vue
    {
        $axe: VueAxe;
    }
}

export declare class VueAxe
{
    static install: PluginFunction<never>;
}

export default VueAxe;

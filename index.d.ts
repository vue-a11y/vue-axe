import { PluginFunction } from 'vue';

interface RunOptions {
    clearConsole: boolean;
    element: Document | HTMLElement;
}

export interface VueAxe
{
    run({ clearConsole, element }: RunOptions): void;

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

declare class VueAxe
{
    static install: PluginFunction<never>;
}

export default VueAxe;

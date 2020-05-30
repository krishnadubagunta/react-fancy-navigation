import { DefaultTheme } from 'react-jss';
import CSS from 'csstype';
interface StyleObject extends CSS.Properties {
}
declare type StylePropsFunction<T> = (p: T) => StyleObject;
export declare type Styles<T> = (t: DefaultTheme) => ({
    [name: string]: StylePropsFunction<T> | StyleObject;
});
declare const _default: (styles: Styles<any>) => (data?: unknown) => Record<string, string>;
export default _default;

export = Temperature;
/**
 * @class Temperature
 * @description Convert temperature units.
 */
declare class Temperature {
    /**
     * @static
     * @method difference
     * @description Calculate temperature difference by units.
     * @param {Temperature} a
     * @param {Temperature} b
     * @returns {TemperatureDifference}
     */
    static difference(a: Temperature, b: Temperature): TemperatureDifference;
    static diff: typeof Temperature.difference;
    /**
     * @constructor
     * @param {number} value Value.
     * @param {string} [unit="K"] Unit.
     */
    constructor(value: number, unit?: string);
    kelvin: number;
    celsius: number;
    delisle: number;
    fahrenheit: number;
    rankine: number;
    reaumur: number;
    romer: number;
    newton: number;
    get K(): number;
    get Kelvin(): number;
    get C(): number;
    get Celsius(): number;
    get D(): number;
    get De(): number;
    get Delisle(): number;
    get F(): number;
    get Fahrenheit(): number;
    get R(): number;
    get Ra(): number;
    get Rankine(): number;
    get r(): number;
    get Re(): number;
    get Reaumur(): number;
    get Ro(): number;
    get roemer(): number;
    get Roemer(): number;
    get Romer(): number;
    get N(): number;
    get Newton(): number;
}
/**
 * @class TemperatureDifference
 * @description Calculate temperature difference by units.
 */
declare class TemperatureDifference extends Temperature {
    /**
     * @constructor
     * @param {Temperature} a
     * @param {Temperature} b
     */
    constructor(a: Temperature, b: Temperature);
}
//# sourceMappingURL=main.d.ts.map
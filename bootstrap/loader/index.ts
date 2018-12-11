import OptionsInterface from './OptionsInterface';
import ComponentInterface from './ComponentInterface';
import Settings from './Settings';

export default class Loader {

    private _options: OptionsInterface = {};

    private _components: ComponentInterface[] = [];

    private _settings: Settings;

    constructor(options: Object) {
        this._options = options;
        this._settings = new Settings();
    }

    async load(components: ComponentInterface[]) {
        this._components = components;

        await this.loadComponents();

        return this._settings;
    }

    private async loadComponents() {
        for (const component of this._components) {
            await component.load(this._settings);
        }
    }

}

export namespace VueEvent {
	export interface Input<T extends EventTarget> extends InputEvent {
		target: T
	}
	export interface HTMLInputEvent extends Event {
		target: HTMLInputElement & EventTarget
	}
}

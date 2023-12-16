const eventBus = {
    on(event: string, callback: { (): void; (): void; (): void; (arg0: any): void; }) {
        document.addEventListener(event, (e) => {
            callback(e)
			}, { once: false });
    },
    dispatch(event: string) {
        document.dispatchEvent(new CustomEvent(event))
    },
    remove(event: any) {
        document.removeEventListener(event, () => {
            console.log('Event Cleared!')
        })
    }
};


export { eventBus }

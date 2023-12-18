export interface iTask {
    id: string

    name: string
    description: string
    progress: number
    completed: { value: number, state: boolean }

    updateProgress(): number
}

const MAX_PROGRESS = 100

export class Task implements iTask {
    readonly id: string
    progress: number
    completed: { value: number, state: boolean }
    description: string

    constructor(public name: string, description: string = "") {
        // The id will be an automatically generated uuid4
        this.id = Math.random().toString()

        // The initial task progress is set to  zero
        this.progress = 0.0
        // The completed flag is initialy be set to false and updated on every update on the progress
        this.completed = { value: this.progress, state: false }
        // This is optional where the task created will have a description
        this.description = description

    }

    updateProgress(): number {
        if (this.progress <= MAX_PROGRESS) {

        } else {
            this.completed = { value: this.progress, state: true }
        }
        return this.progress
    }

    isCompleted(): boolean { return this.completed.state }
}

export const createTask = (taskname: string, description: string = ""): iTask => {
    let newTask = new Task(taskname, description);

    return newTask
}
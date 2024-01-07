// I'm trying to trick the TypeScript type check. Specifically I want to "bring my own type definition" for 'AsyncScheduler'
// even though RxJS already provides a TypeScript definition for this class.
//
// The main use-case for this technique is when the underlying library doesn't declare its types correctly or all the way.

export declare class AsyncScheduler {
    schedule(work: () => void, delay: number) : void

    doesNotExist() : void
}

export declare const asyncScheduler : AsyncScheduler

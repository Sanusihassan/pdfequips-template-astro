export type Dispatch<A> = (value: A) => void;

export type SetStateAction<S> = S | ((prevState: S) => S);

export interface RefObject<T> {
    /**
     * The current value of the ref.
     */
    readonly current: T | null;
}
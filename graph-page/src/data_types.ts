export interface Part {
    type: string
};

export interface TextPartType extends Part {
    type: 'text',
    text: string,
};

export interface ImagePartType extends Part {
    type: 'image',
    src: string,
};

export interface CodePartType extends Part {
    type: 'code',
    text: string,
    language: string,
};

export interface SideBySidePartType extends Part {
    type: 'side',
    left: Part,
    right: Part,
};

export type ItemFormat = {
    /**
     * Name/title
     */
    name: string,
    /**
     * Date of creation
     */
    date: string,
    /**
     * Description to be shown on overview tile
     */
    description: string,
    /**
     * Image to be shown on overview tile
     */
    img: string,
    /**
     * Should overview tile image cover full space with crop, or fit to space
     */
    contain: boolean,
    /**
     * List of main article parts
     */
    parts: Array<Part>
};

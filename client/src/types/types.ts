export interface CurLetter {
    char: string;
    status: number;
}

export interface Knowledge {
    [index: string]: KnowledgeInfo,
}

export interface KnowledgeInfo {
    confirmedPos: number[]; 
    possPos: number[];
}
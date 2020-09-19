import { SAVE_COMMENT } from "./types";

export function saveComment(payload){
    return {
        payload,
        type: SAVE_COMMENT
    }
}
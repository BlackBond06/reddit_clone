import { Timestamp } from "firebase/firestore";
import {atom} from "recoil";

export type Post = {
    id:string;
    communityId:string;
    creatorId:string;
    creatorDisplayName:string;
    title:string;
    body:string;
    numberOfComments:number;
    voteStatus:number;
    imageURL?:string;
    communityImage?:string;
    createdAt:Timestamp;
}

interface PostState {
    selectedPost: Post | null;
    posts:Post [];
}

const defaultPostState: PostState = {
    selectedPost:null,
    posts:[],
};

export const PostState = atom<PostState>({
    key:"postState",
    default:defaultPostState,
})
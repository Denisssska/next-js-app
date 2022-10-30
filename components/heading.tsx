import {NextPage} from "next";


const Heading:NextPage<{tag?:any,text?:string}> = ({tag, text}) => {
    const Tag = tag || 'h1'
    return (
        <Tag>{text}</Tag>

    );
};

export default Heading;
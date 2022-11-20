// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {socials} from "./data/socials";
import {SocialProps} from "../index";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<SocialProps>
) {
    if (req.method === "GET") {
        res.status(200).json(socials)
    }
}

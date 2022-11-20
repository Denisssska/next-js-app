import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import {objType} from "./index";

export const getServerSideProps = async (context: any) => {
      const {id} = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const contact = await res.json()
    if (!contact) {
        return {
            notFound: true
        }
    }
    return {
        props: {contact}
    }
}
const Contact: ({contact}: { contact: objType }) => JSX.Element = ({contact}) => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <main><ContactInfo contact={contact}/></main>


        </>
    );
};
export default Contact
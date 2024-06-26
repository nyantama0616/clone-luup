import FormMain from "../../molecules/Forms/FormMain/FormMain";
import GhostText from "../../atoms/GhoastText/GhoastText";
import { useDesignContext } from "@/commons/contexts/DesignContext";

function Contact() {
    const { contactRef, showContact } = useDesignContext();

    return (
        <div className="flex flex-col w-full md:max-w-[1250px] p-6 md:p-2 space-y-8" ref={contactRef}>
            <div>
                <GhostText text="Contact" className="text-6xl md:text-8xl mb-4" appear={showContact} />
                <p className="text-xl">お問い合わせ</p>
            </div>
            
            {/* TODO: Formを実装 */}
            <div className="w-full bg-white flex justify-center items-center py-16">
                <FormMain className="w-full md:w-[980px]"/>
            </div>
        </div>
    );
}

export default Contact;

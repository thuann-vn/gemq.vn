import {ContactFormBlock} from "@/types/blocks";
import InputLabel from "@/Components/Form/InputLabel";
import TextInput from "@/Components/Form/TextInput";
import InputError from "@/Components/Form/InputError";
import {useForm, usePage} from "@inertiajs/react";
import TextArea from "@/Components/Form/TextArea";
import PrimaryButton from "@/Components/Form/PrimaryButton";
import {FormEventHandler} from "react";
import {PageProps} from "@/types";
import Alert from "@/Components/Form/Alert";
import {useTranslation} from "react-i18next";

export default function ContactForm({block}: { block: ContactFormBlock }) {
    const {flash} = usePage<PageProps>().props;
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const {t} = useTranslation();
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('contact.submit'),
            {
                preserveScroll: true,
                onSuccess: () => reset(),
            });
    };

    return (
        <div className={"py-6 bg-white px-10 shadow"}>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                {block.title}
            </h2>
            <div className={"mb-8"} dangerouslySetInnerHTML={{__html: block.content}}></div>
            {flash.success && (
                <Alert title={"Success"}
                       message={t('Lời nhắn của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.')}
                />
            )}
            <form onSubmit={submit} className="space-y-4" autoComplete={"false"}>
                <div>
                    <InputLabel htmlFor="email" value={t('Họ và Tên')}/>
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('name', e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="email" value="Email"/>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2"/>
                </div>
                <div>
                    <InputLabel htmlFor="phone" value={t('Số điện thoại')}/>
                    <TextInput
                        id="phone"
                        type="tel"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('phone', e.target.value)}
                    />

                    <InputError message={errors.phone} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="subject" value={t('Chủ đề')}/>
                    <TextInput
                        id="subject"
                        type="text"
                        name="subject"
                        value={data.subject}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('subject', e.target.value)}
                    />

                    <InputError message={errors.subject} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="message" value={t('Nội dung')}/>
                    <TextArea
                        id="message"
                        name="message"
                        value={data.message}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('message', e.target.value)}
                    ></TextArea>

                    <InputError message={errors.message} className="mt-2"/>
                </div>
                <PrimaryButton disabled={processing}>
                    {t('Gửi lời nhắn')}
                </PrimaryButton>
            </form>
        </div>

    )
}

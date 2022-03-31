import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { onSnapshot, doc, addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Moment from "react-moment";

const Modal = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useRecoilState(modalState)
    const [postId, setPostId] = useRecoilState(postIdState)
    const [post, setPost] = useState();
    const [comment, setComment] = useState("");
    const router = useRouter()

    return (
        <Transition
            show={isOpen}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
        >
            <Dialog as="div" className="fixed z-50 inset-0 pt-8" onClose={() => setIsOpen(isOpen)}>
                <div>
                    modal
                </div>
            </Dialog>
        </Transition>
    )
    }

export default Modal
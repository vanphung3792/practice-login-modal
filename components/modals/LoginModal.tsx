import useLoginModal from "@/hooks/useLoginModal"
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {

    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }

        loginModal.onClose();
        registerModal.onOpen();
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            // TODO ADD LOGIN

            loginModal.onClose();

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                value={email}
                type="email"
                disabled={isLoading}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                placeholder="Password"
                value={password}
                type="password"
                disabled={isLoading}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>{`Don't have an account? `}
                <span
                    onClick={onToggle}
                    className="
                        text-white
                        cursor-pointer
                        hover:underline
                    "
                >Sign up</span>
            </p>
        </div>
    )
    
  return (
    <Modal 
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
    />
  )
}
export default LoginModal
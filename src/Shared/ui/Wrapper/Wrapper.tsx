import styles from './Wrapper.module.scss';
import Header from 'src/Widgets/ui/header/Header';
import Footer from 'src/Widgets/ui/footer/Footer';
import { FC, ReactNode } from 'react';

interface WrapperProps {
    children: ReactNode;
}


export const Wrapper: FC<WrapperProps> = ({ children }) => {
    return (
        <div className={styles.finalDiv}>
            <Header />
            <div className={styles.containerApp}>
                {children}
            </div>
            <div className={styles.footerFinalDiv}>
                <Footer />
            </div>
        </div>
    );
};
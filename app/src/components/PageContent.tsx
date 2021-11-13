import theme from '../styles/theme';


export interface PageContentProps {
    children?: any;
}

export default function PageContent(props: PageContentProps) {

    return (
        <>
            <div className="content">
                {props.children}
            </div>
            <style jsx>{`
                .content {
                    max-width: ${theme.maxWidth};
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>
        </>
    )
}
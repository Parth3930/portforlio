import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

const codeString = `
const user: User = {
  name: 'Parth Sharma',
  age: 18,
  email: 'sharmaparth.developer@gmail.com',
  country: 'India'
};
`;

const customStyle = {
    'code[class*="language-"]': {
        color: "#6CA2A6",
        background: "transparent",
        fontFamily: 'Courier New, Courier, monospace',
        fontSize: '1em',
        lineHeight: '1.5em',
    },
    ':not(pre) > code[class*="language-"]': {
        background: 'none',
    },
    'pre[class*="language-"]': {
        background: 'none',
    },
    'operator': {
        background: 'none !important'
    },
    'punctuation': {
        background: 'none !important'
    }
};

const CodeBlock = () => {
    const [displayedCode, setDisplayedCode] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedCode(codeString.slice(0, index));
            index++;
            if (index > codeString.length) {
                clearInterval(interval);
            }
        }, 40);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ marginTop: 3, height: '100%', width: '100%', display: "flex", justifyContent: "center", }}
        >
            <SyntaxHighlighter language="typescript" style={{ ...coy, ...customStyle }}>
                {displayedCode}
            </SyntaxHighlighter>
        </motion.div>
    );
};

export default CodeBlock;

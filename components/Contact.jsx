import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Terminal, Play, RefreshCw, KeyRound, CheckCircle2 } from "lucide-react"
import { assets } from "@/assets/assets"

const Contact = () => {
  const [blankDef, setBlankDef] = useState("");
  const [blankReturn, setBlankReturn] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const targetSlots = [
    { id: 'gmail', name: 'Gmail Workspace', icon: assets.gmail, color: 'bg-[#CEB3DB]', url: 'mailto:dineshkumarc9102@gmail.com' },
    { id: 'linkedin', name: 'LinkedIn Network', icon: assets.linkedin, color: 'bg-[#0077B5]', url: 'https://linkedin.com' },
    { id: 'github', name: 'GitHub Repositories', icon: assets.github, color: 'bg-gray-200 border border-black/5 dark:bg-white', url: 'https://github.com' }
  ];

  const handleSnippetClick = (value) => {
    if (isRevealed || isExecuting) return;
    setErrorMessage("");

    // Strategic parameter bucket filling logic
    if (!blankDef) {
      setBlankDef(value);
    } else if (!blankReturn && value !== blankDef) {
      setBlankReturn(value);
    }
  };

  const runPythonScript = () => {
    if (isExecuting || isRevealed) return;
    setErrorMessage("");

    // Validation logic checking if syntax keywords sit in correct target positions
    if (blankDef !== "def" || blankReturn !== "return") {
      setErrorMessage("SyntaxError: invalid syntax node configuration");
      return;
    }

    setIsExecuting(true);
    setTerminalLogs([]);

    const logLines = [
      "python3 execute_reveal.py",
      "import sys, json, portfolio_utils",
      "Loading memory array structures...",
      "Evaluating parameter: dinesh_kumar.is_engineer() -> True",
      "Resolving authorization signature matrices...",
      "Process finished with exit code 0."
    ];

    logLines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLogs(prev => [...prev, line]);
        if (index === logLines.length - 1) {
          setIsExecuting(false);
          setIsRevealed(true);
        }
      }, (index + 1) * 350);
    });
  };

  const resetPythonTerminal = () => {
    setBlankDef("");
    setBlankReturn("");
    setIsExecuting(false);
    setIsRevealed(false);
    setTerminalLogs([]);
    setErrorMessage("");
  };

  return (
    <motion.div
      id='contact'
      className='relative overflow-hidden w-full px-[6%] sm:px-[10%] md:px-[12%] py-24 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Moving Perspective Blueprint Background Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-x-0 top-10 h-[1100px]"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            transform: "perspective(1500px) rotateX(75deg)",
            transformOrigin: "top center",
          }}
          animate={{
            backgroundPositionY: ["0px", "150px"],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        />
      </div>

      <motion.h2
        className='text-center text-3xl sm:text-5xl font-Ovo text-gray-800 dark:text-white'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Where to Find Me
      </motion.h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70 text-sm sm:text-base'>
        If you have any questions, feel free to reach out using the form below.
      </p>

      {/* Main Python Terminal Shell Workspace */}
      <div className="relative z-10 max-w-xl mx-auto bg-neutral-900/95 dark:bg-[#0a0f1d]/95 border border-neutral-300 dark:border-purple-500/20 rounded-[24px] shadow-2xl overflow-hidden flex flex-col items-stretch text-left font-mono backdrop-blur-xl">

        {/* Mock Window Top Header Bar */}
        <div className="w-full bg-neutral-200 dark:bg-[#111827] px-4 py-3 flex items-center justify-between border-b border-neutral-300 dark:border-gray-800/80 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="text-[10px] font-bold tracking-wider text-neutral-600 dark:text-purple-400/70 flex items-center gap-1.5">
            <Terminal size={12} />
            <span>EXECUTE_REVEAL.PY // INTERACTIVE_IDE</span>
          </div>
          <div className="w-12" />
        </div>

        {/* Source Code Script Text Editor Area with Fill blanks slots */}
        <div className="p-5 sm:p-6 text-xs sm:text-sm text-neutral-800 dark:text-neutral-300 space-y-2 select-none min-h-[140px] bg-neutral-50 dark:bg-neutral-950/40 border-b border-neutral-200 dark:border-neutral-800/60">
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            <span className={`inline-block px-2 py-0.5 rounded border text-xs font-bold font-mono transition-all ${blankDef === "def" ? "bg-emerald-500/10 border-emerald-500 text-emerald-500" : blankDef ? "bg-red-500/10 border-red-500 text-red-500" : "bg-neutral-300/40 dark:bg-white/5 border-dashed border-neutral-400 dark:border-neutral-700 text-neutral-400 min-w-[36px] text-center"
              }`}>{blankDef || "???"}</span>
            <span className="text-blue-600 dark:text-blue-400">get_contact_reveal</span>(identity):
          </div>

          <div className="pl-4">
            <span className="text-pink-600 dark:text-pink-400">if</span> identity == <span className="text-emerald-600 dark:text-emerald-400">"Dinesh Kumar"</span>:
          </div>

          <div className="pl-8 flex flex-wrap items-center gap-x-1.5 gap-y-1">
            <span className={`inline-block px-2 py-0.5 rounded border text-xs font-bold font-mono transition-all ${blankReturn === "return" ? "bg-emerald-500/10 border-emerald-500 text-emerald-500" : blankReturn ? "bg-red-500/10 border-red-500 text-red-500" : "bg-neutral-300/40 dark:bg-white/5 border-dashed border-neutral-400 dark:border-neutral-700 text-neutral-400 min-w-[50px] text-center"
              }`}>{blankReturn || "?????"}</span>
            &#123;<span className="text-amber-600 dark:text-amber-400">"status"</span>: <span className="text-emerald-600 dark:text-emerald-400">"ACCESS_GRANTED"</span>&#125;
          </div>
        </div>

        {/* Token Keyword Selection Row Panel */}
        <div className="p-4 bg-neutral-100 dark:bg-[#0a0316] border-b border-neutral-300 dark:border-gray-800/60 flex flex-col gap-2.5">
          <div className="text-[10px] tracking-wider text-neutral-500 dark:text-gray-500 font-bold uppercase select-none">
            INJECT SYNTAX KEYWORD SNIPPETS:
          </div>

          <div className="flex flex-wrap gap-2">
            {["def", "import", "return", "print"].map((token) => {
              const isUsed = blankDef === token || blankReturn === token;
              return (
                <button
                  key={token}
                  type="button"
                  onClick={() => handleSnippetClick(token)}
                  disabled={isUsed || isRevealed || isExecuting}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all active:scale-95 cursor-pointer ${isUsed
                      ? "bg-neutral-200 dark:bg-white/5 border-neutral-300 dark:border-neutral-800 text-neutral-400 dark:text-neutral-600 pointer-events-none"
                      : "bg-white dark:bg-white/5 border-neutral-300 dark:border-gray-800 text-neutral-700 dark:text-neutral-300 hover:border-purple-500/50 hover:text-purple-500"
                    }`}
                >
                  {token}
                </button>
              );
            })}
          </div>
        </div>


        {/* Action Trigger Row panel */}
        <div className="p-4 bg-neutral-100 dark:bg-[#0a0f1d] flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={runPythonScript}
            disabled={isExecuting || isRevealed || !blankDef || !blankReturn}
            className={`px-5 py-2.5 rounded-xl border text-xs font-bold font-mono inline-flex items-center gap-2 transition-all active:scale-97 cursor-pointer ${isRevealed
                ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                : isExecuting
                  ? "bg-purple-950/40 border-purple-500 text-purple-300 animate-pulse"
                  : (!blankDef || !blankReturn)
                    ? "bg-neutral-200 dark:bg-white/5 border-neutral-300 dark:border-neutral-800 text-neutral-400 cursor-not-allowed opacity-50"
                    : "bg-indigo-600 border-indigo-400 text-white hover:bg-indigo-500 shadow-md"
              }`}
          >
            <Play size={14} className={isExecuting ? "animate-spin-slow" : ""} />
            <span>{isRevealed ? "SCRIPT_EXECUTED" : isExecuting ? "COMPILING_RUN..." : "RUN PYTHON SCRIPT"}</span>
          </button>

          {(blankDef || blankReturn || isRevealed) && (
            <button
              type="button"
              onClick={resetPythonTerminal}
              className="text-[11px] font-mono font-bold inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-gray-800 text-neutral-500 hover:text-gray-800 dark:hover:text-white transition cursor-pointer"
            >
              <RefreshCw size={11} />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Dynamic Interactive Link Deployment Row Port */}
        <div className="w-full min-h-[120px] bg-neutral-100 dark:bg-[#040612] p-6 relative flex items-center justify-center border-t border-neutral-300 dark:border-gray-800/80">
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div
                key="python-locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-2 text-center text-neutral-500 dark:text-neutral-600 select-none"
              >
                <KeyRound size={22} className="text-purple-500/40 animate-pulse" />
                <p className="text-xs font-medium px-2">Fill the code parameters above to open pipeline gateways</p>
              </motion.div>
            ) : (
              <motion.div
                key="python-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full flex flex-col gap-4 items-stretch"
              >
                <div className="w-full flex items-center justify-between border-b border-neutral-300 dark:border-emerald-950/40 pb-2 text-[10px] text-emerald-600 dark:text-emerald-500 font-bold select-none">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="animate-bounce" />
                    <span>ACCESS_GRANTED</span>
                  </div>
                </div>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="flex justify-center items-center gap-2 sm:gap-10 flex-wrap">

                    {/* Gmail */}
                    <div className="relative w-14 h-16 group overflow-hidden text-center">
                      <div
                        className="absolute top-0 left-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#CEB3DB] flex items-center justify-center transition-all duration-300 group-hover:scale-75 group-hover:origin-top">
                        <a href="mailto:dineshkumarc9102@gmail.com">
                          <Image src={assets.gmail} alt="Gmail" className="w-6" />
                        </a>
                      </div>
                      <span
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap text-gray-700 dark:text-white/70 transition-all duration-300 group-hover:bottom-0">
                        Gmail
                      </span>
                    </div>

                    {/* LinkedIn */}
                    <div className="relative w-14 h-16 group overflow-hidden text-center">
                      <div
                        className="absolute top-0 left-0  w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#0077B5] flex items-center justify-center transition-all duration-300 group-hover:scale-75 group-hover:origin-top" >
                        <a
                          href="https://www.linkedin.com/in/dinesh-kumarc/"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image src={assets.linkedin} alt="LinkedIn" className="w-6" />
                        </a>
                      </div>
                      <span
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap text-gray-700 dark:text-white/70 transition-all duration-300 group-hover:bottom-0">
                        LinkedIn
                      </span>
                    </div>

                    {/* GitHub */}
                    <div className="relative w-14 h-16 group overflow-hidden text-center">
                      <div
                        className="absolute top-0 left-0  w-10 h-10 sm:w-14 sm:h-14 rounded-full  bg-gray-200 dark:bg-gray-200 flex items-center justify-center transition-all duration-300 group-hover:scale-75 group-hover:origin-top">
                        <a
                          href="https://github.com/dineshkumarc9102"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image src={assets.github} alt="GitHub" className="w-6" />
                        </a>
                      </div>
                      <span
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap  text-gray-700 dark:text-white/70 transition-all duration-300 group-hover:bottom-0">
                        GitHub
                      </span>
                    </div>
                  </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact;

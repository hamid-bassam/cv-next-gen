"use client"
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const TerminalLanding = ({ locale }: { locale: string }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showTerminal, setShowTerminal] = useState(true);
  const terminalLines = useMemo(() => [
    '> open portfolio --explore',
    '> initializing full-stack tech journey...',
    '> Loading personal achievements...',
    '> Compiling projects and innovations...',
    '> Status: Ready to disrupt. Let\'s dive in!'
  ], []);

  useEffect(() => {
    if (lineIndex < terminalLines.length) {
      if (charIndex < terminalLines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + terminalLines[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setLines((prev) => [...prev, terminalLines[lineIndex]]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex(lineIndex + 1);
      }
    } else {
      setTimeout(() => setShowTerminal(false), 1000); // Delay before hiding the terminal
    }
  }, [charIndex, lineIndex, terminalLines]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400">
      {showTerminal ? (
        <Card className="max-w-xl w-full bg-gray-900 shadow-lg">
          <CardContent className="p-6 sm:p-3">
            <div className="font-mono text-lg sm:text-sm space-y-2">
              {lines.map((line, index) => (
                <p key={index} className="animate-fade-in">
                  {line}
                </p>
              ))}
              {lineIndex < terminalLines.length && (
                <p>
                  {currentLine}
                  <span className="blinking-cursor">|</span>
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="fade-in-portfolio w-full text-center text-white">
          <h1 className="text-4xl sm:text-2xl font-bold">Bienvenue sur mon Portfolio</h1>
          <p className="mt-4 text-lg sm:text-base">Découvrez mes projets, mon parcours et bien plus encore.</p>

          <div className="mt-8 flex flex-wrap gap-4 max-sm:flex-col items-center justify-center">
            <Link href={`${locale}/portfolio`} className="w-full sm:w-auto">
              <button className="w-full px-6 sm:px-4 py-3 sm:py-2 bg-green-500 text-black font-bold rounded-lg shadow hover:bg-green-600 transition">
                Découvrir mon Portfolio
              </button>
            </Link>
            <button className="w-full px-6 sm:px-4 py-3 sm:py-2 bg-gray-700 text-white font-bold rounded-lg shadow hover:bg-gray-600 transition sm:w-auto">
              En savoir plus
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          background-color: green;
          animation: blink 0.8s steps(2, start) infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .fade-in-portfolio {
          animation: fadeInPortfolio 1.5s ease-in-out;
        }

        @keyframes fadeInPortfolio {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default TerminalLanding;

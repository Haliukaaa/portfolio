'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircleMore, SendHorizonal, UserRound } from 'lucide-react';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import MagicButton from './ui/magic-button';

type Message = {
  id: string;
  content: string;
  role: 'assistant' | 'user';
  createdAt: Date;
};
const cyrillicToTranslit = CyrillicToTranslit();

const isCyrillic = (text: string) => {
  const cyrillicRegex = /[\u0400-\u04FF]/;
  return cyrillicRegex.test(text);
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processInput = (input: string) => {
    if (isCyrillic(input)) {
      return input;
    }
    return cyrillicToTranslit.transform(input);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const processedInput = processInput(input);

    const userMessage: Message = {
      id: Date.now().toString(),
      content: processedInput,
      role: 'user',
      createdAt: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: processedInput,
          threadId: threadId 
        }),
      });

      const data = await response.json();
      if (data.threadId) {
        setThreadId(data.threadId);
      }
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        role: 'assistant',
        createdAt: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Уучлаарай, таны хүсэлтийг биелүүлэхэд алдаа гарлаа. Та дахин оролдоно уу.',
        role: 'assistant',
        createdAt: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (threadId) {
      localStorage.setItem('chatThreadId', threadId);
    }
  }, [threadId]);

  useEffect(() => {
    const savedThreadId = localStorage.getItem('chatThreadId');
    if (savedThreadId) {
      setThreadId(savedThreadId);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[99]">
      {/* Chat Toggle Buttons Container */}
      <div className="flex space-x-2">
        <MagicButton title="чатботтой чатлах" icon={<MessageCircleMore />} position="right" handleClick={() => setIsChatOpen(!isChatOpen)}/>
      </div>

      {/* Chat Interface */}
      {isChatOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-[#1a1a3a] rounded-lg shadow-xl border z-[99] border-gray-700">
          {/* Messages Container */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-[#121229] rounded-t-lg">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 animate-fadeIn relative ${
                  message.role === 'assistant' ? 'justify-start' : 'justify-end'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[#2a2a5a] flex items-center justify-center">
                    <img 
                      src="/pfp.jpg" 
                      alt="Assistant" 
                      className="w-6 h-6 rounded-full"
                    />
                    {/* Speech Bubble Pointer for Assistant */}
                    <div className="absolute top-4 left-10 w-0 h-0 
                      border-t-8 border-t-transparent 
                      border-b-8 border-b-transparent 
                      border-r-8 border-r-[#2a2a5a] 
                      -ml-2 -mt-2"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg relative ${
                    message.role === 'assistant'
                      ? 'bg-[#2a2a5a] text-purple-200'
                      : 'bg-[#4a4a7a] text-white'
                  }`}
                >
                  {message.content}
                  {/* Speech Bubble Pointer for User */}
                  {message.role === 'user' && (
                    <div className="absolute top-4 right-0 w-0 h-0 
                      border-t-8 border-t-transparent 
                      border-b-8 border-b-transparent 
                      border-l-8 border-l-[#4a4a7a] 
                      -mr-2 -mt-2"
                    />
                  )}
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-[#4a4a7a] flex items-center justify-center">
                    <UserRound className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white-200 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-white-200 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-white-100 rounded-full animate-bounce delay-200" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex p-2 space-x-2 bg-[#1a1a3a] rounded-b-lg">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Надаас асуух зүйлээ бичнэ үү..."
              className="flex-1 p-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-[#2a2a5a] text-purple-200"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 px-3 bg-[#4a4a7a] text-white rounded-full hover:bg-[#5a5a8a] transition-colors disabled:bg-[#3a3a6a]"
            >
              <SendHorizonal className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
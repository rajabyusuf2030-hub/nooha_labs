'use client';

import React, { useState, useEffect } from 'react';
import { Card, Button } from '@nooha/ui';
import { MessageSquare, Sparkles, Send, Brain, ChevronRight } from 'lucide-react';

export function AiInteractivePreview() {
  const [activeTab, setActiveTab] = useState<'chat' | 'insight'>('chat');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'user', content: 'What is the projected fee collection for next term?' }
  ]);

  const botResponse = "Based on current enrollment trends and historical payment speed, we project KES 12.4M in total collection, with a 15% increase in early-bird completions compared to last year.";

  useEffect(() => {
    if (messages.length === 1) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-20">
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab('chat')}
          className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'chat' ? 'bg-emerald-600 text-white' : 'bg-[#111827] text-zinc-500 border border-[#1E293B]'}`}
        >
          Institutional Chat
        </button>
        <button
          onClick={() => setActiveTab('insight')}
          className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'insight' ? 'bg-emerald-600 text-white' : 'bg-[#111827] text-zinc-500 border border-[#1E293B]'}`}
        >
          Predictive Insights
        </button>
      </div>

      <Card variant="glass" className="p-0 overflow-hidden bg-[#111827]/80 border-[#1E293B] min-h-[500px] flex flex-col shadow-2xl">
        {activeTab === 'chat' ? (
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-[#1E293B] flex items-center justify-between bg-[#090D16]/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Nooha Intelligence</h4>
                  <p className="text-[10px] text-emerald-500 font-medium">System Online</p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-8 space-y-6 overflow-y-auto">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-[#1E293B] text-zinc-100' : 'bg-emerald-600/10 border border-emerald-500/20 text-emerald-50'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#1E293B] p-4 rounded-2xl flex gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-[#090D16]/30 border-t border-[#1E293B]">
              <div className="relative">
                <input
                  disabled
                  placeholder="Ask Nooha about your institution..."
                  className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-10 flex flex-col items-center justify-center h-full text-center">
             <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8">
                <Brain size={40} />
             </div>
             <h3 className="text-2xl font-extrabold text-white mb-4">Risk Detection Simulation</h3>
             <p className="text-zinc-400 max-w-md mb-10">
                The Nooha Intelligence engine continuously scans attendance and fee payment patterns to identify at-risk students before they disengage.
             </p>
             <div className="w-full max-w-lg bg-[#090D16] border border-[#1E293B] rounded-2xl overflow-hidden text-left">
                <div className="p-4 border-b border-[#1E293B] bg-red-500/10">
                   <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Urgent Alert</p>
                </div>
                <div className="p-6">
                   <p className="text-sm text-zinc-100 font-bold mb-2">Anomalous Drop in Attendance Detected</p>
                   <p className="text-xs text-zinc-500 mb-6">Class: Grade 9 North | Probability of Dropout: 68%</p>
                   <Button size="sm" className="bg-red-600/20 text-red-400 border border-red-500/20 hover:bg-red-600 hover:text-white">View Full Insight <ChevronRight size={14} /></Button>
                </div>
             </div>
          </div>
        )}
      </Card>
    </div>
  );
}

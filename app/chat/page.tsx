"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card"
import { Bot, Paperclip, Send, Smile } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function Chat() {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey There!",
      sender: "bot",
      timestamp: new Date(new Date().setHours(new Date().getHours() - 1, 30, 0)),
    },
    {
      id: 2,
      text: "How are you?",
      sender: "bot",
      timestamp: new Date(new Date().setHours(new Date().getHours() - 1, 30, 0)),
    },
    {
      id: 3,
      text: "Hello!",
      sender: "user",
      timestamp: new Date(new Date().setHours(new Date().getHours() - 1, 27, 0)),
    },
    {
      id: 4,
      text: "I am fine and how are you?",
      sender: "user",
      timestamp: new Date(new Date().setHours(new Date().getHours() - 1, 26, 0)),
    },
    {
      id: 5,
      text: "I am doing well, Can we meet tomorrow?",
      sender: "bot",
      timestamp: new Date(new Date().setHours(new Date().getHours() - 1, 24, 0)),
    },
    {
      id: 6,
      text: "Yes Sure!",
      sender: "user",
      timestamp: new Date(new Date().setHours(new Date().getHours() - 1, 22, 0)),
    },
  ])

  useEffect(()=>{
    if(messages&&messagesEndRef)
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  },[messages])


  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      const userMessage: Message = {
        id: messages.length + 1,
        text: input,
        sender: "user",
        timestamp: new Date(),
      }
      setMessages([...messages, userMessage])
      setInput("")

      // Simulate bot response
      setTimeout(() => {
        const botResponses = [
          "That's great to hear!",
          "How can I help you with EcoEngage today?",
          "Would you like to learn more about our recycling programs?",
          "Have you checked out our latest community events?",
          "I can help you find sustainable products in our marketplace.",
        ]
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

        const botMessage: Message = {
          id: messages.length + 2,
          text: randomResponse,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      }, 1000)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }).toUpperCase();
  }

  const formatDate = (date: Date) => {
    return "Today"
  }

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <Card className="h-[calc(100vh-200px)] flex flex-col">
        <CardHeader className="border-b px-6 py-4">
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <span>EcoEngage Assistant</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-auto p-0">
          <div className="flex flex-col p-4 space-y-4">
            {messages.map((message, index) => {
              const showDate = index === 0 || messages[index - 1].timestamp.getDate() !== message.timestamp.getDate()

              return (
                <div key={message.id} className="space-y-2">
                  {showDate && (
                    <div className="text-center text-xs text-muted-foreground py-2">
                      {formatDate(message.timestamp)}
                    </div>
                  )}
                  <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex flex-col max-w-[80%] ${message.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`px-4 py-2 rounded-lg ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground rounded-br-none"
                            : "bg-muted rounded-bl-none"
                        }`}
                      >
                        {message.text}
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">{formatTime(message.timestamp)}</span>
                    </div>
                  </div>
                </div>
              )
            })}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button variant="ghost" size="icon" className="rounded-full">
              <Smile className="h-5 w-5" />
            </Button>
            <Button size="icon" className="rounded-full" onClick={handleSend}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

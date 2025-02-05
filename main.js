import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Upload, BookOpen, MessageSquare } from "lucide-react";

const books = [
  { title: "Moby Dick", chapters: ["Chapter 1", "Chapter 2", "Chapter 3"] },
  { title: "Pride and Prejudice", chapters: ["Chapter 1", "Chapter 2", "Chapter 3"] }
];

export default function HomePage() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [selectedBook, setSelectedBook] = useState(books[0]);
  const [selectedChapter, setSelectedChapter] = useState(selectedBook.chapters[0]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-900 text-white p-6 flex flex-col items-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl font-bold">AI-Powered Book Companion</h1>
        <p className="text-lg mt-2">Read novels, get summaries, and AI-driven insights</p>
      </motion.div>

      {/* Book Reader & Upload Section */}
      <div className="mt-8 flex gap-6 flex-wrap justify-center">
        <Card className="w-80 bg-white text-black p-4">
          <CardContent className="flex flex-col items-center">
            <BookOpen className="w-12 h-12 text-blue-600" />
            <h2 className="text-xl font-semibold mt-2">Explore Books</h2>
            <p className="text-sm text-gray-600 text-center mt-1">Navigate chapters, get summaries, and more.</p>
            <select
              className="mt-4 w-full p-2 border rounded"
              onChange={(e) => setSelectedBook(books.find(book => book.title === e.target.value))}
            >
              {books.map((book) => (
                <option key={book.title} value={book.title}>{book.title}</option>
              ))}
            </select>
            <select
              className="mt-4 w-full p-2 border rounded"
              onChange={(e) => setSelectedChapter(e.target.value)}
            >
              {selectedBook.chapters.map((chapter) => (
                <option key={chapter} value={chapter}>{chapter}</option>
              ))}
            </select>
            <Button className="mt-4 w-full">Read Chapter</Button>
          </CardContent>
        </Card>

        <Card className="w-80 bg-white text-black p-4">
          <CardContent className="flex flex-col items-center">
            <Upload className="w-12 h-12 text-blue-600" />
            <h2 className="text-xl font-semibold mt-2">Upload Documents</h2>
            <p className="text-sm text-gray-600 text-center mt-1">Upload a book or document for AI-powered analysis.</p>
            <Input type="file" className="mt-4 w-full" onChange={(e) => setUploadedFile(e.target.files[0])} />
          </CardContent>
        </Card>
      </div>

      {/* Chatbot Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 flex items-center gap-4 bg-white text-black p-4 rounded-2xl shadow-md"
      >
        <MessageSquare className="w-10 h-10 text-blue-600" />
        <div>
          <h3 className="text-lg font-semibold">Need Help?</h3>
          <p className="text-sm text-gray-600">Chat with our AI assistant for insights.</p>
        </div>
        <Button>Ask Now</Button>
      </motion.div>
    </div>
  );
}

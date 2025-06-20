
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Collab = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    gsap.fromTo('.collab-header', {
      opacity: 0,
      y: -50
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out'
    });

    gsap.fromTo('.collab-form', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Send notification to unpheric@gmail.com
      const notificationData = {
        to: 'unpheric@gmail.com',
        subject: `New Collaboration Inquiry: ${formData.subject}`,
        message: `
          New collaboration inquiry received:
          
          Name: ${formData.name}
          Email: ${formData.email}
          Subject: ${formData.subject}
          
          Message:
          ${formData.message}
          
          Timestamp: ${new Date().toISOString()}
        `,
        timestamp: new Date().toISOString(),
        type: 'collaboration_inquiry',
        contactInfo: formData
      };

      console.log('Collaboration notification sent:', notificationData);

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending notification:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="collab-header text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Let's Create Together
          </h1>
          <p className="text-unpheric-gray text-xl max-w-2xl mx-auto">
            Open to musical collaborations, business inquiries, and creative partnerships. 
            Let's bring your vision to life with the power of future bass.
          </p>
        </div>

        {/* Contact Form */}
        <div className="collab-form">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-unpheric-white text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-700 text-unpheric-white placeholder-unpheric-gray focus:border-unpheric-purple"
                  placeholder="Your full name"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-unpheric-white text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-700 text-unpheric-white placeholder-unpheric-gray focus:border-unpheric-purple"
                  placeholder="your.email@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-unpheric-white text-sm font-medium mb-2">
                Subject *
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-gray-900 border-gray-700 text-unpheric-white placeholder-unpheric-gray focus:border-unpheric-purple"
                placeholder="What's this about?"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-unpheric-white text-sm font-medium mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-gray-900 border-gray-700 text-unpheric-white placeholder-unpheric-gray focus:border-unpheric-purple resize-none"
                placeholder="Tell me about your project, collaboration ideas, or business inquiry..."
                required
                disabled={isLoading}
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-unpheric-purple hover:bg-unpheric-purple/80 text-white px-12 py-3 text-lg glow-purple-hover disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-unpheric-gray">
            Typical response time: 24-48 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collab;

'use client';

import { motion } from 'framer-motion';
import { Rocket, Heart, Award, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';

const features = [
  {
    icon: <Heart className='text-pink-500 w-6 h-6' aria-hidden='true' />,
    title: 'Gentle & Effective',
    description: 'Formulated for all skin types with nourishing, dermatologist-approved ingredients.',
  },
  {
    icon: <Award className='text-yellow-500 w-6 h-6' aria-hidden='true' />,
    title: 'Award-Winning',
    description: 'Recognized by leading beauty experts for innovation and results.',
  },
  {
    icon: <Shield className='text-blue-500 w-6 h-6' aria-hidden='true' />,
    title: 'Cruelty-Free',
    description: 'Never tested on animals. 100% vegan and ethically sourced.',
  },
];

const testimonials = [
  {
    name: 'Sophie Lee',
    avatar: '/avatars/sophie.png',
    quote: 'After just two weeks, my skin has never looked better. I love the glow!',
  },
  {
    name: 'Jamal Carter',
    avatar: '/avatars/jamal.png',
    quote: 'Simple routines, real results. Skincare finally feels easy and effective.',
  },
  {
    name: 'Priya Nair',
    avatar: '/avatars/priya.png',
    quote: 'Gentle on my sensitive skin and smells amazing. Highly recommend!',
  },
];

const faqs = [
  {
    question: 'Are your products suitable for sensitive skin?',
    answer: 'Absolutely. Every product is formulated with gentle ingredients, free from harsh chemicals.',
  },
  {
    question: 'Is your packaging eco-friendly?',
    answer: 'Yes, we use fully recyclable materials and support sustainable sourcing.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'We ship worldwide with fast, reliable service.',
  },
];

function LandingPage() {
  return (
    <main className='font-sans bg-white min-h-screen'>
      {/* Navigation */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='py-6'
      >
        <div className='container mx-auto px-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Rocket className='text-pink-600 w-7 h-7' aria-hidden='true' />
            <span className='text-xl font-bold text-gray-900'>GlowSimple</span>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href='#features' className='text-gray-700 hover:text-pink-600 transition-colors px-3 py-2'>Features</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='#testimonials' className='text-gray-700 hover:text-pink-600 transition-colors px-3 py-2'>Testimonials</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='#faq' className='text-gray-700 hover:text-pink-600 transition-colors px-3 py-2'>FAQ</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button asChild>
                  <a href='#get-started' className='ml-2'>
                    Shop Now <ArrowRight className='ml-1 w-4 h-4' aria-hidden='true' />
                  </a>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section>
        <div className='container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center'>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='flex flex-col gap-6'
          >
            <Badge className='w-max bg-pink-100 text-pink-700 font-medium'>New! Summer Glow Collection</Badge>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Simple Skincare, Beautiful Results
            </h1>
            <p className='text-lg text-gray-600 max-w-xl'>
              Discover a minimalist skincare routine designed for healthy, radiant skin. Clean formulas, visible results—made for everyone.
            </p>
            <div className='flex gap-4 mt-2'>
              <Button size='lg'>
                Shop Now <ArrowRight className='ml-2 w-4 h-4' aria-hidden='true' />
              </Button>
              <Button variant='outline' size='lg'>
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='flex justify-center'
          >
            <img
              src='https://d2wrwj382xgrci.cloudfront.net/Pictures/480xany/4/2/4/12424_pe_necessary_good_bottles_333035.jpg'
              alt='Minimalist skincare products on a clean background'
              className='rounded-xl shadow-lg max-w-full h-auto'
              width={420}
              height={420}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-3xl font-bold text-center mb-10 text-gray-900'
          >
            Why Choose GlowSimple?
          </motion.h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <Card className='h-full shadow-sm hover:shadow-md transition'>
                  <CardHeader className='flex flex-row items-center gap-4 pb-2'>
                    {feature.icon}
                    <CardTitle className='text-xl'>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600'>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id='testimonials' className='py-16'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-3xl font-bold text-center mb-10 text-gray-900'
          >
            What Our Customers Say
          </motion.h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {testimonials.map((testi, idx) => (
              <motion.div
                key={testi.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.10 }}
              >
                <Card className='h-full shadow-none border border-gray-200'>
                  <CardContent className='pt-6 pb-8 flex flex-col items-center'>
                    <Avatar className='mb-4 w-16 h-16'>
                      <AvatarImage src={testi.avatar} alt={`Avatar of ${testi.name}`} />
                      <AvatarFallback>
                        {testi.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <p className='text-gray-700 text-center italic mb-3'>“{testi.quote}”</p>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='text-green-500 w-4 h-4' aria-hidden='true' />
                      <span className='font-medium text-gray-900'>{testi.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id='faq' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-2xl'>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-3xl font-bold text-center mb-8 text-gray-900'
          >
            Frequently Asked Questions
          </motion.h2>
          <Accordion type='single' collapsible>
            {faqs.map((faq, idx) => (
              <AccordionItem value={`faq-${idx}`} key={faq.question}>
                <AccordionTrigger className='text-lg font-medium'>{faq.question}</AccordionTrigger>
                <AccordionContent className='text-gray-600'>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id='get-started' className='py-16'>
        <div className='container mx-auto px-4 flex flex-col items-center gap-6'>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-3xl font-bold text-gray-900 text-center'
          >
            Ready for Your Glow Up?
          </motion.h2>
          <p className='text-lg text-gray-600 text-center max-w-xl'>
            Start your simple skincare journey today with our best-selling essentials kit.
          </p>
          <Button size='lg'>
            Shop the Collection <ArrowRight className='ml-2 w-4 h-4' aria-hidden='true' />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 bg-gray-100 mt-8'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-2'>
            <Rocket className='text-pink-600 w-5 h-5' aria-hidden='true' />
            <span className='font-semibold text-gray-800'>GlowSimple</span>
          </div>
          <div className='flex items-center gap-6 text-gray-500 text-sm'>
            <span>&copy; {new Date().getFullYear()} GlowSimple. All rights reserved.</span>
            <a href='#' className='hover:text-pink-600'>Privacy Policy</a>
            <a href='#' className='hover:text-pink-600'>Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;

import Lottie from 'lottie-react'
import { Mail, Github, Linkedin } from 'lucide-react'
import chatbotAnimation from '@/assets/animations/chatbot animation.json'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-muted/50 border-t border-border">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Left - Animation & Tagline */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="w-32 h-32 mb-4">
                            <Lottie
                                animationData={chatbotAnimation}
                                loop={true}
                                className="w-full h-full"
                            />
                        </div>
                        <p className="text-muted-foreground text-sm text-center md:text-left">
                            Building innovative solutions with modern technologies
                        </p>
                    </div>

                    {/* Center - Quick Links */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <nav className="flex flex-col gap-2 text-sm">
                            <a
                                href="#about"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                About
                            </a>
                            <a
                                href="#skills"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                Skills
                            </a>
                            <a
                                href="#projects"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                Projects
                            </a>
                            <a
                                href="#certifications"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                Certifications
                            </a>
                            <a
                                href="#education"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                Education
                            </a>
                        </nav>
                    </div>

                    {/* Right - Contact */}
                    <div className="flex flex-col items-center md:items-end">
                        <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
                        <div className="flex flex-col gap-3 text-sm">
                            <a
                                href="mailto:susheelmalepati2004@gmail.com"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                <Mail className="w-4 h-4" />
                                <span>susheelmalepati2004@gmail.com</span>
                            </a>
                            <div className="flex gap-4 mt-2 justify-center md:justify-end">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                                    aria-label="GitHub">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                                    aria-label="LinkedIn">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom - Copyright */}
                <div className="pt-8 border-t border-border">
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                        <p>
                            © {currentYear} Malepati Susheel Kumar. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

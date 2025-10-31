import { LOGOS } from '../data/constants';

export const AnimatedLogoCloud = () => {
    const logos = LOGOS;
    if (!logos.length) return null;

    return (
        <div className="max-w-5xl mx-auto py-6">
            <div className="mx-auto w-full px-4 md:px-8">
                <div
                    className="group relative flex gap-6 overflow-hidden p-2"
                    style={{
                        maskImage:
                            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
                    }}>
                    {Array(5)
                        .fill(null)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6 group-hover:[animation-play-state:paused]">
                                {logos.map((logo, key) => (
                                    <img
                                        key={key}
                                        src={logo.url}
                                        className="h-20 w-32 px-5"
                                        alt={logo.name}
                                    />
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
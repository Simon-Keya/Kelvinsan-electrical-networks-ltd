'use client';

interface TestimonialCardProps {
  name: string;
  feedback: string;
}

export const TestimonialCard = ({ name, feedback }: TestimonialCardProps) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <div className="card-body items-center text-center">
        <p className="text-base-content mb-4">&ldquo;{feedback}&rdquo;</p>
        <h3 className="font-bold text-primary">{name}</h3>
      </div>
    </div>
  );
};

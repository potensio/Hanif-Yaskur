import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface WorkCardProps {
  project: Project;
}

export const WorkCard: React.FC<WorkCardProps> = ({ project }) => {
  return (
    <a
      href={project.link}
      className="group break-inside-avoid block rounded-3xl overflow-hidden backdrop-blur-md bg-white/70 border border-white/20 hover:bg-white/80 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 h-full"
    >
      <div className="relative ">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={800}
          height={600}
          className={`aspect-4/3 object-cover`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-black mb-1 font-geist">
              {project.title}
            </h3>
            <p className="text-md text-black/60 mb-3 font-geist">
              {project.description}
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1 text-xs text-black/50 group-hover:text-black transition font-geist">
              View
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

import React, { useState } from "react";
import { Clock, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress as ProgressBar } from "@/components/ui/progress";

interface ProjectStatusCardProps {
  title: string;
  progress: number;
  dueDate: string;
  contributors: Array<{ name: string; image?: string }>;
  tasks: Array<{ title: string; completed: boolean }>;
}

export function ProjectStatusCard({
  title,
  progress,
  dueDate,
  contributors,
  tasks,
}: ProjectStatusCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <Card
      className="w-full max-w-md cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-200"
      onClick={toggleExpand}
    >
      <CardHeader className="space-y-1">
        <div className="space-y-2">
          <Badge
            variant="secondary"
            className={
              progress === 100
                ? "bg-green-100 text-green-600"
                : "bg-blue-100 text-blue-600"
            }
          >
            {progress === 100 ? "Achieved" : "In Progress"}
          </Badge>
          <h3 className="text-xl font-semibold text-gvs-dark-gray">{title}</h3>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <ProgressBar value={progress} className="h-2" />
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-4 pt-2">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>Timeline: {dueDate}</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm flex items-center text-gvs-dark-gray">
                  <Users className="h-4 w-4 mr-2" />
                  Key Contributors
                </h4>
                <div className="flex -space-x-2">
                  {contributors.map((contributor, index) => (
                    <Avatar key={index} className="border-2 border-white">
                      <AvatarImage
                        src={
                          contributor.image ||
                          `/placeholder.svg?height=32&width=32&text=${contributor.name[0]}`
                        }
                        alt={contributor.name}
                      />
                      <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gvs-dark-gray">Key Achievements</h4>
                {tasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-sm text-gray-600"
                  >
                    <span>{task.title}</span>
                    {task.completed && (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
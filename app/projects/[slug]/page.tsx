import { Metadata } from 'next';
import { getProjects, getProjectBySlug } from '@/lib/projects';
import PageWrapper from '@/components/layout/PageWrapper';
import ProjectDetail from '@/components/content/ProjectDetail';
import { notFound } from 'next/navigation';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };
  return { title: project.title };
}

const ProjectPage = async ({ params }: { params: Params }) => {
  const project = await getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }
  return (
    <PageWrapper>
      {project && <ProjectDetail project={project} />}
    </PageWrapper>
  );
};

export default ProjectPage;

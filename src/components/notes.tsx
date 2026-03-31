import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './shadcn/Dialog';

interface NotesProps {
  text: string;
}

export const Notes = ({ text }: NotesProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="text-purple-300 text-xs underline hover:cursor-pointer">
          Read more about this horse
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="flex justify-center">Some info</DialogTitle>
          <DialogDescription className="text-md sm:text-lg max-h-100 overflow-scroll">
            {text}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
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
        <DialogTrigger className="text-purple-200 underline hover:cursor-pointer">
          Read more about this horse
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">What I have to say about this horse</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-lg max-h-100 overflow-scroll">
            {text}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

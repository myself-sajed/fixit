import Note from "@/components/custom/Note";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Send, UploadCloud } from "lucide-react";
import { useState } from "react";

interface FormData {
    type: string;
    title: string;
    description: string;
    files: FileList | null;
}

const items = [
    { value: "1", label: "Bug", placeholder: "Describe the bug" },
    { value: "2", label: "Improvement", placeholder: "Describe the improvement" },
    { value: "3", label: "Feature", placeholder: "Describe the new feature" },
];

const SubmitBugForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        type: "1",
        title: "",
        description: "",
        files: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, files: e.target.files }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.title.trim() || !formData.description.trim()) {
            alert("Please fill out all required fields.");
            return;
        }
        console.log("Form Submitted:", formData);
    };

    const selectedType = items.find((item) => item.value === formData.type);

    return (
        <form onSubmit={handleSubmit} className="space-y-7 flex items-center flex-col justify-center w-full">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="type">What are you reporting?</Label>
                <RadioGroup className="grid grid-cols-2" value={formData.type} onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}>
                    {items.map((item) => (
                        <div key={item.value} className="relative flex flex-col items-start gap-4 rounded-lg border p-3 w-full">
                            <div className="flex items-center gap-2">
                                <RadioGroupItem id={`type-${item.value}`} value={item.value} />
                                <Label className="cursor-pointer" htmlFor={`type-${item.value}`}>{item.label}</Label>
                            </div>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="title">Title</Label>
                <Input type="text" id="title" placeholder="Enter here..." value={formData.title} onChange={handleChange} required />
            </div>
            <div className="grid w-full gap-1.5">
                <Label htmlFor="description">{selectedType?.placeholder}</Label>
                <Textarea id="description" placeholder="Type your message here." value={formData.description} onChange={handleChange} required />
            </div>
            <div className="grid w-full gap-1.5">
                <Label htmlFor="files">Upload Screenshots (Optional)</Label>
                <label className="relative flex flex-col items-center justify-center w-full py-6 border border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                    <div className="text-center">
                        <div className="border p-2 rounded-md max-w-min mx-auto">
                            <UploadCloud size={20} />
                        </div>
                        <p className="mt-2 text-sm text-gray-600"><span className="font-semibold">Drag files</span></p>
                        <p className="text-xs text-gray-500">Click to upload screenshots (Max size 1MB)</p>
                    </div>
                    <input type="file" id="files" className="absolute inset-0 opacity-0 cursor-pointer" multiple onChange={handleFileChange} />
                </label>
            </div>
            <Button type="submit" startIcon={<Send className="ml-5" />} className="w-full">
                Submit Form
            </Button>
            <Note className="my-5 mx-auto"><b>Note: </b>Make sure you provide a clear title, a detailed description, and, if possible, attach screenshots to help us understand your feedback better.</Note>
        </form>
    );
};

export default SubmitBugForm;

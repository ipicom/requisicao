'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

export default function ChurchForm() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would handle the form submission and PDF generation
    console.log('Form submitted')
  }

  return (
    <div className="container mx-auto p-4 px-[10vw] py-[10vh]">
      <div className="mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qTVpum0PscpgPkRf3SsFAKjdbhXMZ4.svg"
          alt="Church Logo"
          width={300}
          height={114}
          priority
        />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="number">Nº</Label>
          <Input id="number" type="text" required />
        </div>
        <div>
          <Label htmlFor="from">De:</Label>
          <Input id="from" type="text" required />
        </div>
        <div>
          <Label htmlFor="to">Para:</Label>
          <Input id="to" type="text" required />
        </div>
        <div>
          <Label htmlFor="subject">Assunto:</Label>
          <Input id="subject" type="text" required />
        </div>
        <div>
          <Label>Data:</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label>Tipo de Solicitação:</Label>
          <RadioGroup defaultValue="servicos">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="servicos" id="servicos" />
              <Label htmlFor="servicos">Serviços</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="uso-instalacoes" id="uso-instalacoes" />
              <Label htmlFor="uso-instalacoes">Uso das instalações da Igreja</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compras" id="compras" />
              <Label htmlFor="compras">Compras</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="uso-equipamento" id="uso-equipamento" />
              <Label htmlFor="uso-equipamento">Uso de equipamento</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="outros" id="outros" />
              <Label htmlFor="outros">Outros:</Label>
              <Input type="text" className="ml-2" />
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label htmlFor="description">Descrição:</Label>
          <Textarea id="description" required />
        </div>
        <div>
          <Label htmlFor="responsible">Responsável:</Label>
          <Input id="responsible" type="text" required />
        </div>
        <div>
          <Label htmlFor="received-by">Recebido por:</Label>
          <Input id="received-by" type="text" required />
        </div>
        <div>
          <Label>Data:</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label>Status:</Label>
          <RadioGroup defaultValue="deferido">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="deferido" id="deferido" />
              <Label htmlFor="deferido">Deferido</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="indeferido" id="indeferido" />
              <Label htmlFor="indeferido">Indeferido</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label htmlFor="by">Por:</Label>
          <Input id="by" type="text" required />
        </div>
        <div>
          <Label htmlFor="executed-by">Executado por:</Label>
          <Input id="executed-by" type="text" required />
        </div>
        <div>
          <Label>Data:</Label>
          <Input type="date" required />
        </div>
        <Button type="submit">Finalizar</Button>
      </form>
    </div>
  )
}
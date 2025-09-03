"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

function FormRow() {
  const [selectedModeles, setSelectedModeles] = useState<string[]>([])
  const [selectedAnnees, setSelectedAnnees] = useState<string[]>([])
  const [selectedMoteurs, setSelectedMoteurs] = useState<string[]>([])
  const [selectedTrans, setSelectedTrans] = useState<string[]>([])
  const [selectedMotricite, setSelectedMotricite] = useState<string[]>([])

  const toggleValue = (
    arr: string[],
    setter: (v: string[]) => void,
    value: string
  ) => {
    if (arr.includes(value)) {
      setter(arr.filter((item) => item !== value))
    } else {
      setter([...arr, value])
    }
  }

  return (
    <div className="flex gap-2 flex-wrap justify-center bg-accent p-6 rounded-lg">
      {/* 1. Coutant */}
      <div className="flex flex-col max-w-[100px]">
        <Label htmlFor="coutant">Coutant</Label>
        <Input id="coutant" placeholder="Coutant" className="bg-white" />
      </div>

      {/* 2. Detail */}
      <div className="flex flex-col max-w-[100px]">
        <Label htmlFor="detail">Detail</Label>
        <Input id="detail" placeholder="Detail" className="bg-white" />
      </div>

      {/* 3. Manuf. */}
      <div className="flex flex-col max-w-[100px]">
        <Label htmlFor="manuf">Manuf.</Label>
        <Input id="manuf" placeholder="Manuf." className="bg-white" />
      </div>

      {/* 4. Modele */}
      <div className="flex flex-col">
        <Label>Modele</Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-white justify-between w-[140px]">
              {selectedModeles.length > 0 ? selectedModeles.join(", ") : "Select Modele"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[140px]">
            {["F-150", "F-250", "F-350"].map((m) => (
              <DropdownMenuCheckboxItem
                key={m}
                checked={selectedModeles.includes(m)}
                onCheckedChange={() => toggleValue(selectedModeles, setSelectedModeles, m)}
              >
                {m}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 5. Annee */}
      <div className="flex flex-col">
        <Label>Annee</Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-white justify-between w-[140px]">
              {selectedAnnees.length > 0 ? selectedAnnees.join(", ") : "Select Annee"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[140px]">
            {["2002", "2003", "2004"].map((a) => (
              <DropdownMenuCheckboxItem
                key={a}
                checked={selectedAnnees.includes(a)}
                onCheckedChange={() => toggleValue(selectedAnnees, setSelectedAnnees, a)}
              >
                {a}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 6. Moteur */}
      <div className="flex flex-col">
        <Label>Moteur</Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-white justify-between w-[140px]">
              {selectedMoteurs.length > 0 ? selectedMoteurs.join(", ") : "Select Moteur"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[140px]">
            {["3.0 Ga", "6.0 Di"].map((m) => (
              <DropdownMenuCheckboxItem
                key={m}
                checked={selectedMoteurs.includes(m)}
                onCheckedChange={() => toggleValue(selectedMoteurs, setSelectedMoteurs, m)}
              >
                {m}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 7. Trans */}
      <div className="flex flex-col">
        <Label>Trans</Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-white justify-between w-[140px]">
              {selectedTrans.length > 0 ? selectedTrans.join(", ") : "Select Trans"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[140px]">
            {["6A", "5A", "5M"].map((t) => (
              <DropdownMenuCheckboxItem
                key={t}
                checked={selectedTrans.includes(t)}
                onCheckedChange={() => toggleValue(selectedTrans, setSelectedTrans, t)}
              >
                {t}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 8. Motricite */}
      <div className="flex flex-col">
        <Label>Motricite</Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-white justify-between w-[140px]">
              {selectedMotricite.length > 0 ? selectedMotricite.join(", ") : "Select Motricite"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[140px]">
            {["AWD", "4WD", "RWD"].map((m) => (
              <DropdownMenuCheckboxItem
                key={m}
                checked={selectedMotricite.includes(m)}
                onCheckedChange={() => toggleValue(selectedMotricite, setSelectedMotricite, m)}
              >
                {m}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 9. Interval Ini. */}
      <div className="flex flex-col max-w-[100px]">
        <Label htmlFor="interval">Interval Ini.</Label>
        <Input id="interval" placeholder="Interval Ini." className="bg-white" />
      </div>

      {/* 10. Recurrence */}
      <div className="flex flex-col max-w-[100px]">
        <Label htmlFor="recurrence">Recurrence</Label>
        <Input id="recurrence" placeholder="Recurrence" className="bg-white" />
      </div>

      {/* 11. Garantie */}
      <div className="flex flex-col max-w-[100px]">
        <Label htmlFor="garantie">Garantie</Label>
        <Input id="garantie" placeholder="Garantie" className="bg-white" />
      </div>

      {/* 12. Couverture */}
      <div className="flex flex-col max-w-[100px]">
        <Label htmlFor="couverture">Couverture</Label>
        <Input id="couverture" placeholder="Couverture" className="bg-white" />
      </div>
    </div>
  )
}

export default function Home() {
  const [rows, setRows] = useState<number[]>([0]) // start with one row

  return (
    <div className="container mx-auto h-screen py-12 space-y-6">
      {rows.map((row, idx) => (
        <FormRow key={idx} />
      ))}

      <div className="flex justify-center">
        <Button
          size={"lg"}
          className="mt-4 bg-blue-500 hover:bg-blue-400 cursor-pointer"
          onClick={() => setRows([...rows, rows.length])}
        >
          Soumettre
        </Button>
      </div>
    </div>
  )
}

package piscine;

import piscine.ressource.Cabine;
import piscine.ressource.GestionnaireCabines;
import piscine.ressource.GestionnairePaniers;
import piscine.ressource.GestionnaireRessources;
import piscine.ressource.Panier;
import piscine.util.ActionTermineeException;
import piscine.util.Scheduler;

/** Classe représentant une simulation du problème de la piscine */
public class Piscine {

	/**
	 * méthode main de la classe (chargée de faire la simulation)
	 * @param args le tableau des paramètres
	 * @throws ActionTermineeException 
	 */
	public static void main(String[] args) throws ActionTermineeException {
		GestionnaireRessources<Panier> paniers = new GestionnairePaniers(6);
		GestionnaireRessources<Cabine> cabines = new GestionnaireCabines(3);
		Scheduler s = new Scheduler();
		s.ajouteAction(new Nageur("Jean",paniers,cabines,6,4,8));
		s.ajouteAction(new Nageur("Paul",paniers,cabines,2,10,4));
		s.ajouteAction(new Nageur("Bruno",paniers,cabines,10,18,10));
		s.ajouteAction(new Nageur("Marcel",paniers,cabines,3,7,5));
		s.ajouteAction(new Nageur("Anatole",paniers,cabines,18,3,3));
		s.ajouteAction(new Nageur("Clement",paniers,cabines,3,6,10));
		s.ajouteAction(new Nageur("Desire",paniers,cabines,6,5,7));
		while (! s.estTerminee()) s.faire() ;
	}

}
